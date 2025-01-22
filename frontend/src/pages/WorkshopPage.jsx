import { useState, useEffect } from "react";
import icon1 from "../images/workshop1.png";
import icon2 from "../images/workshop2.jpeg";
import icon3 from "../images/workshop3.jpg";
import icon4 from "../images/workshop4.jpg";
import icon5 from "../images/workshop5.jpg";
import icon6 from "../images/workshop6.jpg";
import icon7 from "../images/workshop7.jpg";
import icon8 from "../images/workshop8.jpg";
import icon9 from "../images/workshop9.jpg";
import icon10 from "../images/workshop10.jpg";
import icon11 from "../images/workshop11.jpg";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { workshops } from "../constants/workshops";
import { addUsers, getProfile, subtractUsers } from "../services/auth";
import toast from 'react-hot-toast';
import Workshop1 from "./workpage/Workshop1";
import BaseUrl from "../BaseUrl";
import workback from '/aurora_header.png';

const WorkshopPage = () => {
  const token = sessionStorage.getItem('token');
  const [selectedWorkshops, setSelectedWorkshops] = useState({});
  const [registeredWorkshops, setRegisteredWorkshops] = useState([]);
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11];

  const handleRegister = (workshop) => {
    const key = workshop.date + workshop.time; // Group workshops by date
    if (!user || !user.id) {
      toast.error("Please Login, To Access the Contents", { position: 'top-center' });
      navigate('/login');
      return;
    }

    // Use a flag to prevent duplicate confirmations and actions
    let hasConfirmed = false;

    setSelectedWorkshops((prev) => {
      if (prev[key]?.id === workshop.id) {
        // Unregister the selected workshop
        if (!hasConfirmed) {
          hasConfirmed = true;
          toast.error("Workshop unregistered successfully!", { position: 'top-center' });
        }
        const { [key]: _, ...rest } = prev;
        return rest;
      } else if (prev[key]) {
        // Alert user before switching workshops on the same date
        if (!hasConfirmed) {
          hasConfirmed = true;
          const confirmSwitch = window.confirm(
            `You have already selected "${prev[key].title}" on ${workshop.date}.\n\n` +
            `Do you want to switch to "${workshop.title}"?`
          );
          if (!confirmSwitch) {
            // User canceled the switch
            toast.error("Workshop selection not changed.", { position: 'top-center' });
            return prev;
          }
        }
      }
      // Register the new workshop
      if (!hasConfirmed) {
        hasConfirmed = true;
        toast.success(`Selected "${workshop.title}" on ${workshop.date}!`, { position: 'top-center' });
      }
      return { ...prev, [key]: workshop };
    });
  };



  const handleSubmit = async () => {
    const selectedIds = Object.values(selectedWorkshops).map((workshop) => workshop.id);

    if (!user || !user.id) {
      toast.error("Please Login, To Access the Contents", { position: 'top-center' });
      navigate('/login');
      return;
    }

    const payload = {
      userId: user.id,
      selectedWorkshops: selectedIds,
    };

    toast.promise(
      fetch(`${BaseUrl}/user/updateWorkshops`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log(selectedIds);
          await addUsers({ WorkshopIds: selectedIds });
          return response.json();
        }),
      {
        loading: 'Submitting your workshops...',
        success: 'Workshops successfully updated!',
        error: 'Failed to update workshops. Please try again.',
      }, { position: 'top-center' }
    )
      .then((data) => {
        setUser((prev) => ({
          ...prev,
          workshops: data.workshops,
        }));
        navigate("/profile");
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleChangePreference = async () => {
    const selectedIds = Object.values(selectedWorkshops).map((workshop) => workshop.id);

    if (!user || !user.id) {
      toast.error("Please Login to Access the Contents", { position: 'top-center' });
      navigate('/login');
      return;
    }

    if (!user.workshopPaid) {
      toast.error("Please finish payment in Profile to access the contents.", { position: 'top-center' });
      navigate('/profile');
      return;
    }
    const substract = user.workshops;
    console.log(substract);
    await subtractUsers({ WorkshopIds: substract });

    const payload = {
      userId: user.id,
      selectedWorkshops: selectedIds,
    };

    toast.promise(
      fetch(`${BaseUrl}/user/updateWorkshops`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        }),
      {
        loading: 'Submitting your workshops...',
        success: 'Please update your preferences.',
        error: 'Failed to update workshops. Please try again.',
      }, { position: 'top-center' }
    )
      .then((data) => {
        setUser((prev) => ({
          ...prev,
          workshops: data.workshops,
        }));
      })
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    console.log(user)
    const setWorkshops = async () => {
      const user1 = await getProfile(token);
      setRegisteredWorkshops(user1.data.data.workshops);
    };

    setWorkshops();
  }, [selectedWorkshops]);

  return (
    <div
    className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 pt-[150px] sm:pt-[200px] md:pt-[299px] pb-[100px] sm:pb-[150px] md:pb-[250px] font-press-start bg-cover bg-top bg-fixed overflow-hidden"
    style={{ backgroundImage: `url(${workback})` }}
  >
      {/* Workshop Title */}
      <section className="text-center pb-[410px]">
        <h1 className="lg:text-6xl text-3xl font-heading font-extrabold lg:pb-[100px] pb-[220px] text-white">
          WORKSHOPS
        </h1>

        <p className="lg:text-xl text-md mx-auto font-body leading-relaxed text-white">
          Get Ready To Embark On An Unforgettable Journey Into The Realms Of Technology with TechWeek: Aurora, Brought To You By ISTE Manipal.
        </p>
      </section>


      {/* Preference */}
      <div
        className="text-right px-10 mb-6"
        style={{
          fontFamily: "Chakra Petch",
        }}

        onClick={() => {
          handleChangePreference()
          setCheck(false);
        }}
      >
        <button className="bg-[#519984] px-6 py-2 rounded-full text-white font-semibold shadow-md transition duration-300 hover:shadow-[0_0_15px_#7DC5EE] hover:bg-[#ADD6EA]">
          Change Preference
        </button>

      </div>

      {check ? (<>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 px-10">
          {workshops.map((workshop) => {
            const key = workshop.date + workshop.time;
            // const isSelected = selectedWorkshops[key]?.id === workshop.id;
            const isSelected = registeredWorkshops.find((id) => id === workshop.id);
            //THIS IS WORKIBG BROOOOO
            //VROO
            //LOL BVROI

            return (
              <div
                key={workshop.id}
                className={`mt-12 w-full max-w-4xl bg-transparent rounded-[36px] border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px] p-8 pt-[95px] transform transition hover:scale-105 ${isSelected ? "bg-green-200 text-black" : ""
                  }`}
              >
                <div className="flex justify-center mb-4">
                  <img src={icons[`${workshop.id - 1}`]} alt="Workshop Icon" className="w-[346.2px] lg:h-[255.727px]" />
                </div>
                <h2 className="text-2xl p-5 font-body font-semibold text-[#EAEAEA] text-center mb-2">{workshop.title}</h2>
                <div className="rounded-[8px] text-[#EAEAEA] font-body border-[1px] border-x-2 border-y-0 border-[#F3F3F3] ">
                  <p className="text-center text-md mb-4">
                    {workshop.date}
                    <br />
                    {workshop.time}
                  </p>
                </div>
                <div className="flex justify-around gap-2">
                  <button
                    className={`${isSelected ? "bg-red-500 hover:bg-red-400" : "bg-zinc-700"
                      } text-white lg:text-lg text-xs px-2 py-2 rounded-full hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300`}
                    onClick={() => toast.error('First select change preference, Previous Selections will be Lost!!!', { position: 'top-center' })}
                  >
                    {isSelected ? "Unregister" : "Register"}
                  </button>
                  <button className="bg-blue-500 text-[#1B1B1B] lg:text-lg text-xs px-2 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out"
                    onClick={() => {
                      navigate(`/Workshop${workshop.id}`)
                    }}>
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>)
        // : (<>
        //   <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 px-10">
        //     {workshops.map((workshop) => {
        //       const key = workshop.date;
        //       const isSelected = selectedWorkshops[key]?.id === workshop.id;
        //       // const isSelected = registeredWorkshops.find((id) => id === workshop.id);
        //       //THIS IS WORKIBG BROOOOO
        //       //VROO
        //       //LOL BVROI

        //       return (
        //         <div
        //           key={workshop.id}
        //           className={`mt-12 w-full max-w-4xl bg-[rgba(255,255,255,0.06)] rounded-[36px] border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px] p-8 pt-[95px] rounded-[35.22px] border border-white bg-white/10 backdrop-blur-[100px] p-5 transform transition hover:scale-105 ${isSelected ? "bg-green-200 text-black" : ""
        //             }`}
        //         >
        //           <div className="flex justify-center mb-4">
        //             <img src={icons[`${workshops.id-1}`]} alt="Workshop Icon" className="w-[346.2px] h-[255.727px]" />
        //           </div>
        //           <h2 className="text-2xl font-semibold font-body text-[#EAEAEA] text-center mb-2">{workshop.title}</h2>
        //           <div className="rounded-[8px] text-[#EAEAEA]  font-body border-[1px] border-x-2 border-y-0 border-[#F3F3F3] ">
        //             <p className="text-center text-md mb-4">
        //               {workshop.date}
        //               <br />
        //               {workshop.time}
        //             </p>
        //           </div>
        //           <div className="flex justify-around">
        //             <button
        //               className={`${isSelected ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"
        //                 } text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300`}
        //               onClick={() => handleRegister(workshop)}
        //             >
        //               {isSelected ? "Unregister" : "Register Now"}
        //             </button>
        //             <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out"
        //               onClick={() => {
        //                 navigate(`/Workshop${workshop.id}`)
        //               }}>
        //               Read More
        //             </button>
        //           </div>
        : (<>
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 px-10 mb-20">
            {workshops.map((workshop) => {
              const key = workshop.date + workshop.time;
              const isSelected = selectedWorkshops[key]?.id === workshop.id;
              // const isSelected = registeredWorkshops.find((id) => id === workshop.id);
              //THIS IS WORKIBG BROOOOO
              //VROO
              //LOL BVROI

              return (
                <div
                  key={workshop.id}
                  className={`mt-12 w-full max-w-4xl bg-transparent rounded-[36px] border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] pt-[95px] backdrop-blur-[100px] p-5 transform transition hover:scale-105 ${isSelected ? "bg-green-200 text-black" : ""
                    }`}
                >
                  <div className="flex justify-center mb-4">
                    <img src={icons[`${workshop.id - 1}`]} alt="Workshop Icon" className="w-[346.2px] h-[255.727px]" />
                  </div>
                  <h2 className="text-2xl font-semibold font-body text-[#EAEAEA] text-center mb-2">{workshop.title}</h2>
                  <div className="rounded-[8px] text-[#EAEAEA]  font-body border-[1px] border-x-2 border-y-0 border-[#F3F3F3] ">
                    <p className="text-center text-md mb-4">
                      {workshop.date}
                      <br />
                      {workshop.time}
                    </p>
                  </div>
                  <div className="flex justify-around">
                    <button
                      className={`${isSelected ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"
                        } text-[#1B1B1B] lg:text-lg text-xs px-2 py-2 rounded-full hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300`}
                      onClick={() => handleRegister(workshop)}
                    >
                      {isSelected ? "Unregister" : "Register"}
                    </button>
                    <button className="bg-blue-500 text-[#1B1B1B] lg:text-lg text-xs px-2 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out"
                      onClick={() => {
                        navigate(`/Workshop${workshop.id}`)
                      }}>
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>)}

      {!check && (
        <div
          className="sticky bottom-0 left-0 w-full bg-[#007bff] text-white py-4 text-center cursor-pointer rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </div>
      )}
    </div>
  );
};

export default WorkshopPage;