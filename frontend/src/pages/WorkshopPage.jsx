import { useState, useEffect } from "react";
import icon from "../images/check.png";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { workshops } from "../constants/workshops";
import { getProfile } from "../services/auth";
import toast from 'react-hot-toast';
import Workshop1 from "./workpage/Workshop1";
import BaseUrl from "../BaseUrl";
import workback from '../images/work_back.png';

const WorkshopPage = () => {
  const token = sessionStorage.getItem('token');
  const [selectedWorkshops, setSelectedWorkshops] = useState({});
  const [registeredWorkshops, setRegisteredWorkshops] = useState([]);
  const [check,setCheck] = useState(true);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleRegister = (workshop) => {
    const key = workshop.date; // Group workshops by date
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
  
  

  const handleSubmit = () => {
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
      fetch("http://localhost:8000/user/updateWorkshops", {
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

  const handleChangePreference = () => {
    const selectedIds = Object.values(selectedWorkshops).map((workshop) => workshop.id);

    if (!user || !user.id || !user.workshopPaid) {
      console.log('ok');
      toast.error("Please Login, To Access the Contents", { position: 'top-center' });
      navigate('/login');
      return;
    }

    const payload = {
      userId: user.id,
      selectedWorkshops: selectedIds,
    };

    toast.promise(
      fetch("http://localhost:8000/user/updateWorkshops", {
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
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pt-[299px] pb-[250px] font-press-start bg-cover bg-top bg-no-repeat"
    style={{ backgroundImage: `url(${workback})` }}>
      {/* Workshop Title */}
      <section className="text-center pb-[410px]">
        <h1 className="text-7xl font-heading font-extrabold">WORKSHOPS</h1>
        <p className="mt-4 text-2xl max-w-3xl mx-auto font-body leading-relaxed">
          Get Ready To Embark On An Unforgettable Journey Into The Realms Of Technology with TechWeek: Aurora, Brought To You By ISTE Manipal.
        </p>
      </section>
      
      
      {/* <div className="text-center my-10 pt-2">
        <h1 className="text-5xl font-bold text-[#D9D9D9]-400 uppercase"
          style={{
            textShadow: "0px 4px 20px rgba(209, 249, 10, 0.69)",
            fontFamily: "Press Start 2P",
          }}>
          Workshops
        </h1>
      </div> */}


      {/* Preference */} 
      <div
        className="text-right px-10 mb-6"
        style={{
          fontFamily: "Chakra Petch",
        }}

        onClick={()=>{
          handleChangePreference()
          setCheck(false);
        }}
      >
        <button className="bg-[#519984] px-6 py-2 rounded-full text-white font-heading font-semibold shadow-md transition duration-300 hover:shadow-[0_0_15px_#7DC5EE] hover:bg-[#ADD6EA]">
        Change Preference
        </button>

      </div>

      {check ? (<>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 px-10">
          {workshops.map((workshop) => {
            const key = workshop.date;
            // const isSelected = selectedWorkshops[key]?.id === workshop.id;
            const isSelected = registeredWorkshops.find((id) => id === workshop.id);
            //THIS IS WORKIBG BROOOOO
            //VROO
            //LOL BVROI

            return (
              <div
                key={workshop.id}
                className={`mt-12 w-full max-w-4xl bg-[rgba(255,255,255,0.06)] rounded-[36px] border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px] p-8 pt-[95px] rounded-[35.22px] border border-white bg-white/10 backdrop-blur-[100px] p-5 transform transition hover:scale-105 ${
                  isSelected ? "bg-green-200 text-black" : ""
                }`}                             
              >
                <div className="flex justify-center mb-4">
                  <img src={icon} alt="Workshop Icon" className="w-[346.2px] h-[255.727px]" />
                </div>
                <h2 className="text-2xl p-5 font-body font-semibold text-[#EAEAEA] text-center mb-2">{workshop.title}</h2>
                <div className="rounded-[8px] text-[#EAEAEA] font-body border-[1px] border-x-2 border-y-0 border-[#F3F3F3] ">
                  <p className="text-center text-md mb-4">
                    {workshop.date}
                    <br />
                    {workshop.time}
                  </p>
                </div>
                <div className="flex justify-around">
                  <button
                    className={`${isSelected ? "bg-red-500 hover:bg-red-400" : "bg-zinc-700"
                      } text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300`}
                    onClick={() => toast.error('First select change preference, Previous Selections will be Lost!!!',{ position: 'top-center' })}
                  >
                    {isSelected ? "Unregister" : "Register Now"}
                  </button>
                  <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out"
                  onClick={()=>{
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
      : (<>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 px-10">
          {workshops.map((workshop) => {
            const key = workshop.date;
            const isSelected = selectedWorkshops[key]?.id === workshop.id;
            // const isSelected = registeredWorkshops.find((id) => id === workshop.id);
            //THIS IS WORKIBG BROOOOO
            //VROO
            //LOL BVROI

            return (
              <div
                key={workshop.id}
                className={`mt-12 w-full max-w-4xl bg-[rgba(255,255,255,0.06)] rounded-[36px] border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px] p-8 pt-[95px] rounded-[35.22px] border border-white bg-white/10 backdrop-blur-[100px] p-5 transform transition hover:scale-105 ${
                  isSelected ? "bg-green-200 text-black" : ""
                }`}   
              >
                <div className="flex justify-center mb-4">
                  <img src={icon} alt="Workshop Icon" className="w-[346.2px] h-[255.727px]" />
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
                      } text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300`}
                    onClick={() => handleRegister(workshop)}
                  >
                    {isSelected ? "Unregister" : "Register Now"}
                  </button>
                  <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out"
                  onClick={()=>{
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
          className="sticky bottom-0 left-0 w-full bg-[#007bff] text-white py-4 text-center cursor-pointer "
          onClick={handleSubmit}
        >
          Submit
        </div>
      )}
    </div>
  );
};

export default WorkshopPage;