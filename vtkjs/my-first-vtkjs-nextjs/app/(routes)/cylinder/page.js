"use client";
import { useState, useRef, useEffect } from "react";

import "@kitware/vtk.js/Rendering/Profiles/Geometry";

import vtkGenericRenderWindow from "@kitware/vtk.js/Rendering/Misc/GenericRenderWindow";

import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";
import vtkConcentricCylinderSource from "@kitware/vtk.js/Filters/Sources/CylinderSource";

//
import "@kitware/vtk.js/favicon";

// Load the rendering pieces we want to use (for both WebGL and WebGPU)
import "@kitware/vtk.js/Rendering/Profiles/Geometry";

//

export default function asdf() {
  const vtkContainerRef = useRef(null);
  const context = useRef(null);

  useEffect(() => {
    if (!context.current) {
      const renderWindow = vtkGenericRenderWindow.newInstance({
        rootContainer: vtkContainerRef.current,
        controlSize: 25,
      });
      renderWindow.setContainer(vtkContainerRef.current);
      const cylinder = vtkConcentricCylinderSource.newInstance({
        height: 0.25,
        // radius: [0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
        cellFields: [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
        resolution: 60,
        skipInnerFaces: true,
      });
      const mapper = vtkMapper.newInstance();
      const actor = vtkActor.newInstance();

      mapper.setInputConnection(cylinder.getOutputPort());
      actor.setMapper(mapper);

      const renderer = renderWindow.getRenderer();
      renderer.addActor(actor);
      renderer.resetCamera();

      renderWindow.resize();
      // function updateSizeAndOrientation() {
      // }
      // updateSizeAndOrientation();

      context.current = {
        renderWindow,
        renderer,
        cylinder,
        actor,
        mapper,
      };
    }

    return () => {
      if (context.current) {
        const { renderWindow, cylinder, actor, mapper } = context.current;
        actor.delete();
        mapper.delete();
        cylinder.delete();
        renderWindow.delete();
        context.current = null;
      }
    };
  }, [vtkContainerRef]);

  return (
    <div
      style={{
        backgroundColor: "sienna",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
        }}
        ref={vtkContainerRef}
      />
    </div>
  );
}
