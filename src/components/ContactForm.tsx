import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

function ContactForm() {
  return (
    <form
      action={`process.env.FORMSPREE_ACTION_URL`}
      method="POST"
      className="max-w-5xl bg-primary/20 rounded-xl py-8 px-6 space-y-5"
    >
      <h2 className="text-xl lg:text-2xl font-bold">Contact Me</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Your Email</Label>
          <Input
            type="email"
            name="email"
            className="not-dark:bg-white"
            placeholder="JohnSmith@mail.com"
            required
          ></Input>
        </div>
        <div className="space-y-4">
          <Label>Message</Label>
          <Textarea
            name="message"
            className="not-dark:bg-white min-h-[80px]"
            required
          ></Textarea>
        </div>
      </div>
      <Button type="submit" className="w-full mt-2">
        Send
      </Button>
    </form>
  );
}
export default ContactForm;
