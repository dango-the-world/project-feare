import { Button } from "@yamada-ui/react";
import { auth, signIn, signOut } from "../../../../auth";

export async function SignInButton() {
  const session = await auth();
  if (!session?.user)
    return (
      <>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button type="submit">Sign in</Button>
        </form>
      </>
    );
}

export async function SignOutButton() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </>
  );
}
