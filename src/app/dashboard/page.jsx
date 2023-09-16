"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./dashboard.css";
import { stock } from "../data/data";
import Image from "next/image";
import Barchart from "@/component/Barchart/Barchart";
import PieChartComponent from "@/component/Piechart/Piechart";
import AddUser from "@/component/AddUserModal/AddUser";
import Modal from "@/component/Modal/Modal";
import NewUser from "@/component/NewUser/NewUser";
import { FiLogOut } from "react-icons/fi";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (session.status === "loading") {
    return <p style={{ textAlign: "center" }}>Loading....</p>;
  }
  if (session.status === "unauthenticated") {
    router.replace("/login");
  }

  const handleUserSignUp = (userData) => {
    setUserInfo(userData);
    closeModal(); 
  };

  return (
    <div className="container">
      {/* <h1>Home Page</h1> */}
      {session.status === "authenticated" ? (
        <div>
          {/*      navbar          */}
          <div className="navbar">
            <h2 className="left-element">Dashboard</h2>
            <div className="right-component">
              <input type="text" className="searchbar" placeholder="Search" />
              {session?.data?.user?.image && (
                <Image
                  src={session.data.user.image}
                  width={35}
                  height={35}
                  alt="user"
                  style={{ borderRadius: "50%" }}
                />
              )}
              <button onClick={() => signOut("google")} className="signOut">
                {" "}
                <FiLogOut />
              </button>
            </div>
          </div>

          {/* top components */}
          <div className="top-component">
            {stock.map((item) => (
              <div className="indiviualComponent" key={item.id}>
                <Image src={item.image} width={20} height={20} alt="logo" />
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
                <div className="increasecomponent">
                  <span className="increase">{item.increase}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Barchart />
          </div>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onUserSignUp={handleUserSignUp}
          />
          <div className="lowercontainer">
            <div className="column">
              <PieChartComponent />
            </div>
            {userInfo === null ? (
              <div className="column " onClick={openModal}>
                <AddUser />
              </div>
            ) : (
              <div className="column ">
                <NewUser userInfo={userInfo} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          You are not authenticated. Please <Link href="/login">log in</Link>.
        </p>
      )}
    </div>
  );
};

export default Dashboard;
