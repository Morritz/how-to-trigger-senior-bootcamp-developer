import React from "react";
import { useEffect, useRef } from "react";

function CheckboxesParent(props: any) {
  const refs = useRef([]) as any;

  return (
    <>
      <input
        type="checkbox"
        id="checkall"
        name="checkall"
        onChange={(e) => {
          for (let item of refs.current) {
            item.checked = e.target.checked;
          }
        }}
      />
      {React.Children.map(props.children, (child, i) =>
        React.cloneElement(child, {
          ref: (dom: any) => {
            refs.current[i] = dom;
          },
        })
      )}
    </>
  );
}

function Checkboxes() {
  return (
    <>
      <CheckboxesParent>
        <input type="checkbox" id="1" name="1" />
        <input type="checkbox" id="2" name="2" />
        <input type="checkbox" id="3" name="3" />
      </CheckboxesParent>
    </>
  );
}
