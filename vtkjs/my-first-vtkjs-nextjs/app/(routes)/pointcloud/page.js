"use client";
import { useState, useRef, useEffect } from "react";

import "@kitware/vtk.js/Rendering/Profiles/Geometry";

// import vtkFullScreenRenderWindow from "@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow";
import vtkGenericRenderWindow from "@kitware/vtk.js/Rendering/Misc/GenericRenderWindow";

import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";
import vtkPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";

export default function Home() {
  const vtkContainerRef = useRef(null);
  const context = useRef(null);
  const [representation, setRepresentation] = useState(2);

  useEffect(() => {
    if (!context.current) {
      // 포인트클라우드
      const genericRenderWindow = vtkGenericRenderWindow.newInstance({
        rootContainer: vtkContainerRef.current,
        controlSize: 25,
      });
      genericRenderWindow.setContainer(vtkContainerRef.current);

      const renderer = genericRenderWindow.getRenderer();
      const renderWindow = genericRenderWindow.getRenderWindow();
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
        genericRenderWindow.resize();
      });
      context.current = {
        genericRenderWindow,
        renderWindow,
        renderer,
        actor,
        mapper,
      };
    }

    return () => {
      if (context.current) {
        const { genericRenderWindow, actor, mapper } = context.current;
        actor.delete();
        mapper.delete();
        genericRenderWindow.delete();
        context.current = null;
      }
    };
  }, [vtkContainerRef]);

  useEffect(() => {
    if (context.current) {
      const { actor, renderWindow } = context.current;
      actor.getProperty().setRepresentation(representation);
      renderWindow.render();
    }
  }, [representation]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "300px" }} ref={vtkContainerRef} />
      <table
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          background: "white",
          padding: "12px",
          zIndex: 100,
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
        </tbody>
      </table>
    </div>
  );
}
