import { createSignal } from "solid-js";

export default () => {
  const [inputValue, setInputValue] = createSignal("");
  const [checked, setChecked] = createSignal(false);
  const [sliderValue, setSliderValue] = createSignal(50);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Web Awesome Components with Type Safety</h2>
      {/* Button component with type-safe props */}
      <wa-button variant="neutral" size="medium">
        Click Me
      </wa-button>
      <br />
      <br />
      {/* Input component with type-safe event handling */}
      <wa-input
        label="Enter your name"
        placeholder="Type here..."
        value={inputValue()}
        on:wa-input={(e: Event) => {
          // Custom wa-input event with full type safety
          const target = e.target as unknown as { value: string };
          setInputValue(target.value);
        }}
      />
      <p>Input value: {inputValue()}</p>
      <br />
      {/* Checkbox with strongly-typed events */}
      <wa-checkbox
        checked={checked()}
        on:wa-change={(e: Event) => {
          // Strongly typed custom event
          const target = e.target as unknown as { checked: boolean };
          setChecked(target.checked);
        }}
      >
        Accept terms and conditions
      </wa-checkbox>
      <p>Checked: {checked() ? "Yes" : "No"}</p>
      <br />
      {/* Slider component */}
      <wa-slider
        min={0}
        max={100}
        value={sliderValue()}
        on:wa-input={(e: Event) => {
          const target = e.target as unknown as { value: number };
          setSliderValue(target.value);
        }}
      />
      <p>Slider value: {sliderValue()}</p>
      <br />
      {/* Badge component */}
      <wa-badge variant="success">New</wa-badge>{" "}
      <wa-badge variant="warning">Beta</wa-badge>{" "}
      <wa-badge variant="danger">Deprecated</wa-badge>
      <br />
      <br />
      {/* Progress bar */}
      <wa-progress-bar value={sliderValue()} />
      <br />
      {/* Icon component */}
      <wa-icon name="heart" style={{ "font-size": "2rem", color: "red" }} />
      <br />
      <br />
      {/* Avatar */}
      <wa-avatar label="User avatar" initials="BS" attr:loading={"lazy"} />
      <br />
      <br />
      {/* Switch component */}
      <wa-switch>Enable notifications</wa-switch>
      <br />
      <br />
      {/* Card with slots */}
      <wa-card>
        <div slot="header">Card Header</div>
        <p>This is the card body content.</p>
        <div slot="footer">Card Footer</div>
      </wa-card>
    </div>
  );
};
