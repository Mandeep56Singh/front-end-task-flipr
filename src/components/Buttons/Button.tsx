import { Primitive } from "@radix-ui/react-primitive";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils/utils";

const buttonVariants = cva(
  "flex items-center justify-center  font-semibold text-secondary transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-primary/90 bg-primary",
        white: "hover:bg-white/90 bg-white",
        outline: "border-2 hover:bg-primary/90",
        textual: "text-special",
      },
      size: {
        default: "px-8 py-2",
        icon: "size-14 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ComponentProps<typeof Primitive.button> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Primitive.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
