import * as Form from "@radix-ui/react-form";
import Button from "../Buttons/Button";

const SubscribeForm = () => (
  <Form.Root className="w-full max-w-sm mx-auto">
    <div className="flex gap-2 items-start">
      <Form.Field className="flex-1" name="email">
        <div className="relative">
          <Form.Control asChild>
            <input
              className="box-border w-full h-[35px] rounded px-2.5 text-[15px] bg-secondary text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] placeholder-opacity-50 placeholder-white"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Control>
          {/* Reserve space for validation messages */}
          <div className="absolute top-full left-0 w-full mt-1 h-[16px]">
            <Form.Message
              className="text-[13px] text-red-500"
              match="valueMissing"
            >
              Email is required.
            </Form.Message>
            <Form.Message
              className="text-[13px] text-red-500"
              match="typeMismatch"
            >
              Enter a valid email address.
            </Form.Message>
          </div>
        </div>
      </Form.Field>
      <Form.Submit asChild>
        <Button>Subscribe</Button>
      </Form.Submit>
    </div>
  </Form.Root>
);

export default SubscribeForm;
