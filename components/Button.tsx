import { FC } from "react";

interface PrimaryButtonProps {
  type: "primary";
  label: string;
}
interface SecondaryButtonProps {
  type: "Secondary";
  label: string;
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

// type predicate function to check if props are of type PrimaryButtonProps

function isPrimaryButtonProps(props: ButtonProps): props is PrimaryButtonProps {
  return props.type === "primary";
}

export const primaryButtonProps: PrimaryButtonProps = {
  type: "primary",
  label: "Primary Button",
};
export const secondaryButtonProps: SecondaryButtonProps = {
  type: "Secondary",
  label: "Secondary Button",
};

const Button: FC<ButtonProps> = (props) => {
  if (isPrimaryButtonProps(props)) {
    return (
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {props.label}
      </button>
    );
  } else {
    return (
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
        }}
      >
        {props.label}
      </button>
    );
  }

};

export default Button;
