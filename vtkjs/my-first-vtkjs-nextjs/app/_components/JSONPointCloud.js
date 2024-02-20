"use client";

import React, { useEffect, useRef, useState } from "react";

// import vtkGenericRenderWindow from "@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow";
import vtkGenericRenderWindow from "@kitware/vtk.js/Rendering/Misc/GenericRenderWindow";

import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";

import vtkPointsCore from "@kitware/vtk.js/Common/Core/Points";
import vtkCellArrayCore from "@kitware/vtk.js/Common/Core/CellArray";
import vtkPolyData from "@kitware/vtk.js/Common/DataModel/PolyData";
import vtkDataArray from "@kitware/vtk.js/Common/Core/DataArray";

const JSONPointCloud = () => {
  const vtkContainerRef = useRef(null);
  const context = useRef(null);

  useEffect(() => {
    if (!context.current) {
      fetch("/json/point_cloud_colored.json")
        .then((response) => response.json())
        .then((points) => {
          const vtkPoints = vtkPointsCore.newInstance();
          const vtkCells = vtkCellArrayCore.newInstance();
          const pointData = new Float32Array(points.length * 3);
          const colorData = new Uint8Array(points.length * 3);

          points.forEach((point, index) => {
            const offset = index * 3;
            pointData[offset] = point.x;
            pointData[offset + 1] = point.y;
            pointData[offset + 2] = point.z;

            colorData[offset] = point.r * 255;
            colorData[offset + 1] = point.g * 255;
            colorData[offset + 2] = point.b * 255;

            vtkCells.insertNextCell([index]);
          });

          const polyData = vtkPolyData.newInstance();
          vtkPoints.setData(pointData);
          polyData.setPoints(vtkPoints);
          console.log("p", polyData);
          polyData.getVerts().setData(vtkCells.getData());
          polyData.getPointData().setScalars(
            vtkDataArray.newInstance({
              name: "Colors",
              numberOfComponents: 3,
              values: colorData,
              dataType: "Uint8Array",
            })
          );
          // VTK.js 렌더링 파이프라인 설정 및 시각화 코드 추가...
          const fullScreenRenderer = vtkGenericRenderWindow.newInstance({
            background: [0, 0, 0],
            rootContainer: vtkContainerRef.current,
            controlSize: 25,
          });
          fullScreenRenderer.setContainer(vtkContainerRef.current);

          const renderer = fullScreenRenderer.getRenderer();
          const renderWindow = fullScreenRenderer.getRenderWindow();

          // Mapper 생성 및 설정
          const mapper = vtkMapper.newInstance();
          mapper.setInputData(polyData);

          // Actor 생성 및 Mapper 연결
          const actor = vtkActor.newInstance();
          actor.getProperty().setPointSize(1);
          actor.setMapper(mapper);

          // 렌더러에 Actor 추가
          renderer.addActor(actor);

          // 카메라 위치 조정 (선택적)
          renderer.resetCamera();
          renderWindow.render();

          // 인터랙터 초기화 (사용자 입력에 대한 반응 시작)
          const interactor = renderWindow.getInteractor();
          interactor.initialize();
          interactor.bindEvents(vtkContainerRef.current);

          context.current = {
            fullScreenRenderer,
            renderWindow,
            renderer,
            actor,
            mapper,
          };
        });
    }
    return () => {
      if (context.current) {
        const { fullScreenRenderer, actor, mapper } = context.current;
        actor.delete();
        mapper.delete();
        fullScreenRenderer.delete();
        context.current = null;
      }
    };
  }, [vtkContainerRef]);

  return (
    <div style={{ backgroundColor: "lightgray" }} ref={vtkContainerRef}></div>
  );
};

export default JSONPointCloud;
