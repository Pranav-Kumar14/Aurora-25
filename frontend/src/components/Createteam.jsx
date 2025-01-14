import React, { useState } from "react";

const CreateTeam = () => {
    const [teamname, setTeamname] = useState("");
    const [email, setEmail] = useState("");
    const [visibility, setVisibility] = useState("private");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    const handleCreateTeam = async (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem("authToken"); // Retrieve token from sessionStorage
        if (!token) {
            setMessage("You must be logged in to create a team.");
            return;
        }

        try {
            const response = await fetch("/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Add token to the Authorization header
                },
                body: JSON.stringify({
                    teamname,
                    email,
                    visibility,
                    description,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setMessage(`Team "${teamname}" created successfully!`);
            } else {
                setMessage(data.message || "Failed to create team.");
            }
        } catch (error) {
            console.error("Error creating team:", error);
            setMessage("An error occurred while creating the team.");
        }
    };

    return (
        <div>
            <h2>Create a Team</h2>
            <form onSubmit={handleCreateTeam}>
                <div>
                    <label>Team Name:</label>
                    <input
                        type="text"
                        value={teamname}
                        onChange={(e) => setTeamname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Visibility:</label>
                    <select
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                    >
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Create Team</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateTeam;
