import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, password, username } = await req.json();

    // パスワードをハッシュ化
    const passwordHash = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (error) {
      console.error("Auth error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // `User` テーブルにデータを追加
    const { error: insertError } = await supabase.from("User").insert([
      {
        id: data.user?.id,
        email,
        username,
        passwordHash,
        iconUrl: "",
        createdAt: new Date(),
      },
    ]);

    if (insertError) {
      console.error("Insert error:", insertError.message);
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Unexpected error:", (err as Error).message);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
