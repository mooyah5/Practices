"use client";
import { useState, useRef, useEffect } from "react";

import "@kitware/vtk.js/Rendering/Profiles/Geometry";

import vtkFullScreenRenderWindow from "@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow";

import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";
import vtkConeSource from "@kitware/vtk.js/Filters/Sources/ConeSource";
import vtkPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";

export default function Home() {
  const vtkContainerRef = useRef(null);
  const context = useRef(null);
  const [coneResolution, setConeResolution] = useState(8);
  const [representation, setRepresentation] = useState(2);

  useEffect(() => {
    if (!context.current) {
      // 포인트클라우드
      const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
        background: [0, 0, 0],
      });
      const renderer = fullScreenRenderer.getRenderer();
      const renderWindow = fullScreenRenderer.getRenderWindow();
      const polyDataReader = vtkPolyDataReader.newInstance();
      const mapper = vtkMapper.newInstance();
      const actor = vtkActor.newInstance();
      polyDataReader.setUrl("/vtp/earth.vtp").then(() => {
        const polyData = polyDataReader.getOutputData(0);
        console.log(polyData);
        mapper.setInputData(polyData);
        actor.setMapper(mapper);

        renderer.addActor(actor);
        renderer.resetCamera();
        renderWindow.render();
      });

      // 포인트클라우드

      // const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
      //   rootContainer: vtkContainerRef.current,
      // });
      // const coneSource = vtkConeSource.newInstance({ height: 1.0 });

      // const mapper = vtkMapper.newInstance();

      // mapper.setInputConnection(coneSource.getOutputPort());

      // const actor = vtkActor.newInstance();
      // actor.setMapper(mapper);

      // const renderer = fullScreenRenderer.getRenderer();
      // const renderWindow = fullScreenRenderer.getRenderWindow();

      // renderer.addActor(actor);
      // renderer.resetCamera();
      // renderWindow.render();

      context.current = {
        fullScreenRenderer,
        renderWindow,
        renderer,
        // coneSource,
        actor,
        mapper,
      };
    }

    return () => {
      if (context.current) {
        const { fullScreenRenderer, actor, mapper } = context.current;
        actor.delete();
        mapper.delete();
        // coneSource.delete();
        fullScreenRenderer.delete();
        context.current = null;
      }
    };
  }, [vtkContainerRef]);

  // useEffect(() => {
  //   if (context.current) {
  //     const { coneSource, renderWindow } = context.current;
  //     coneSource.setResolution(coneResolution);
  //     renderWindow.render();
  //   }
  // }, [coneResolution]);

  useEffect(() => {
    if (context.current) {
      const { actor, renderWindow } = context.current;
      actor.getProperty().setRepresentation(representation);
      renderWindow.render();
    }
  }, [representation]);

  return (
    <div>
      <div ref={vtkContainerRef} />
      <table
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          background: "white",
          padding: "12px",
        }}
      >
        <tbody>
          <tr>
            <td>
              <select
                value={representation}
                style={{ width: "100%" }}
                onInput={(ev) => setRepresentation(Number(ev.target.value))}
              >
                <option value="0">Points</option>
                <option value="1">Wireframe</option>
                <option value="2">Surface</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="range"
                min="4"
                max="80"
                value={coneResolution}
                onChange={(ev) => setConeResolution(Number(ev.target.value))}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <a
        style={{
          position: "absolute",
          top: "100px",
          left: "30px",
          background: "blue",
          padding: "12px",
          fontColor: "white",
        }}
        href="/asdf"
      ></a>
    </div>
  );
}
