import Image from "next/image";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
        <p className={styles.subtitle}>Please log in to access your account.</p>

        <Link href="/login">
          <button className={styles.loginButton}>Go to Login Page</button>
        </Link>
      </div>
    </div>
  );
}
