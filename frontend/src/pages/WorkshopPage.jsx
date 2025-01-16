import { useState, useEffect } from "react";
import icon from "../images/workicon.png";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { workshops } from "../constants/workshops";
import { getProfile } from "../services/auth";
import toast from 'react-hot-toast';

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
        window.reload()
      })
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    const setWorkshops = async () => {
      const user1 = await getProfile(token);
      setRegisteredWorkshops(user1.data.data.workshops);
    };

    setWorkshops();
  }, [selectedWorkshops]);

  return (
    <div className="bg-gradient-to-b from-[#040D4C] via-[#020528] to-[#020323] min-h-screen pt-6 text-white relative">
      <div className="text-center my-10 pt-2">
        <h1 className="text-5xl font-bold text-[#D9D9D9]-400 uppercase"
          style={{
            textShadow: "0px 4px 20px rgba(209, 249, 10, 0.69)",
            fontFamily: "Press Start 2P",
          }}>
          Workshops
        </h1>
      </div>


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
        <button className="bg-[#7DC5EE]-500 px-6 py-2 rounded-full hover:bg-blue-600">
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
                className={`rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105 ${isSelected ? "bg-green-200 text-black" : ""
                  }`}
              >
                <div className="flex justify-center mb-4">
                  <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
                </div>
                <h2 className="text-xl font-semibold text-center mb-2">{workshop.title}</h2>
                <div className="rounded-[8px] border-[1px] border-x-2 border-y-0 border-[#F3F3F3] ">
                  <p className="text-center text-sm mb-4">
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
                  <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
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
                className={`rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105 ${isSelected ? "bg-green-200 text-black" : ""
                  }`}
              >
                <div className="flex justify-center mb-4">
                  <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
                </div>
                <h2 className="text-xl font-semibold text-center mb-2">{workshop.title}</h2>
                <div className="rounded-[8px] border-[1px] border-x-2 border-y-0 border-[#F3F3F3] ">
                  <p className="text-center text-sm mb-4">
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
                  <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
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