import React from "react";

export default function Accordion({
  dataTarget,
  title,
  collapseClass,
  description,
}) {
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${dataTarget}`}
            aria-expanded="false"
            aria-controls={dataTarget}
          >
            <strong>{title}</strong>
          </button>
        </h2>
        <div
          id={dataTarget}
          class={`accordion-collapse collapse ${collapseClass}`}
          data-bs-parent="#history"
        >
          <div class="accordion-body">{description}</div>
        </div>
      </div>
    </>
  );
}
