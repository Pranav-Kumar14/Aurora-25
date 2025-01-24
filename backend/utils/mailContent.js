const { sendMail } = require('./mail.js');

// Send welcome email
const sendJoinEmail = (userEmail,name) => {
    const subject = `🎉 You're In! Welcome to the Aurora Hackathon! 🚀`;
    const body = `
        Hey${name},
        Woohoo! You’re officially part of the Aurora —let the innovation begin! 🎉

Get ready to team up, create, and compete in an epic journey of creativity and tech wizardry. It’s time to push boundaries, turn ideas into reality, and have an absolute blast while doing it! 💡🔥

Expect exciting updates, challenges, and opportunities to make your mark. But first, check your inbox for the next steps, and if you’ve got any burning questions, hit us up at aurora.istemanipal@gmail.com.

Let’s make this hackathon unforgettable! We can’t wait to see the magic you’ll create! ✨

Best,  
The Aurora Team
ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Send leave email
const sendLeaveEmail = (userEmail) => {
    const subject = 'Confirmation of Your Withdrawal from the Aurora Hackathon';
    const body = `
        Dear Participant,


This email confirms that you have left your current team and, as a result, your participation in the **Aurora Hackathon**, the flagship event of ISTE, is currently on hold.

However, we would like to inform you that you are welcome to rejoin a team and resume your participation in the hackathon. If you need any assistance with finding a team or rejoining the event, please don’t hesitate to contact us at aurora.istemanipal@gmail.com.

We appreciate your efforts and contributions thus far and look forward to seeing you continue your journey in the hackathon.

Best regards, 
 The Aurora Hackathon Team
 ISTE Club 

       
    `;
    sendMail(userEmail, subject, body);
};

// Send team creation email
const sendTeamCreationEmail = (userEmail, teamName, teamLeader) => {
    const subject = ` Team Created Successfully: Welcome to Aurora Hackathon!`;
    const body = `
        Dear ${teamLeader},

        Congratulations on successfully creating your team, ${teamName}, for the Aurora Hackathon, the flagship event of ISTE!

This marks the beginning of an exciting journey of collaboration and innovation. We are confident that your team will deliver outstanding solutions and demonstrate excellence throughout the competition.

Should you require any assistance or have any queries, please feel free to contact us at aurora.istemanipal@gmail.com.

We wish you and your team the very best as you embark on this remarkable challenge.

Best regards,  
The Aurora Hackathon Team 
ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Send team join request email
const sendJoinRequestEmail = (teamLeaderEmail, teamName, userName) => {
    const subject = `New Join Request for Your Team: ${teamName} for Aurora Hackathon`;
    const body = `
        Dear Team Leader,

        We hope this message finds you well.

A new request has been submitted by ${fullName} to join your team, ${teamName}, for the **Aurora Hackathon**. Below are the details of the request:

----------

Team Name: :${teamName}
Participant Name :  [User Name]  
Reason for Joining:
""

----------

Please log in to your account to review the request and take the necessary action. Should you need any assistance or have any questions, feel free to contact us at aurora.istemanipal@gmail.com.

Thank you for your leadership, and we wish you the best of luck with your team!

Best regards,  
The Aurora Hackathon Team
ISTE Club
    `;
    sendMail(teamLeaderEmail, subject, body);
};

// Send team approval email
const sendApprovalEmail = (userEmail, teamName) => {
    const subject = `Your Request to Join Team ${teamName} for Aurora Hackathon Has Been Approved!`;
    const body = `
        Dear Participant,

We are pleased to inform you that your request to join the team ${teamName} for the Aurora Hackathon has been successfully approved.

This is an excellent opportunity to collaborate with your team and contribute to the innovative solutions being developed. Please connect with your team leader for further instructions and details regarding the next steps.

Should you have any questions or need assistance, feel free to contact us at aurora.hackathon@iste.com

We wish you all the best in this exciting challenge and look forward to seeing the impact your team will make.

Best regards,  
The Aurora Hackathon Team
ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Send team rejection email
const sendRejectionEmail = (userEmail, teamName) => {
    const subject = `Your Request to Join Team ${teamName}Has Been Reviewed
`;
    const body = `
       Dear Participant,

We regret to inform you that after careful review, your request to join the team ${teamName} for the Aurora Hackathon has not been accepted.

However, don’t be discouraged! There are other teams available for you to join, and we encourage you to explore these options. Additionally, we welcome you to apply again for next year’s hackathon.

If you need any assistance or have questions, please feel free to contact us at aurora.istemanipal@gmail.com.

We appreciate your interest and look forward to your future participation in our events.

Best regards,  
The Aurora Hackathon Team
ISTE Club

    `;
    sendMail(userEmail, subject, body);
};

// Send member removal email
const sendRemoveMemberEmail = (userEmail, teamName) => {
    const subject = `You Have Been Removed from Team ${teamName} for Aurora Hackathon`;
    const body = `
       Dear Participant,

We wanted to let you know that you've been removed from the team ${teamName} for the Aurora Hackathon.

Don’t be discouraged—there are plenty of other teams to join, and we’re sure you’ll find a great fit. If you’d like to discuss this or have any questions, feel free to reach out to us at aurora.istemanipal@gmail.com.

Best of luck, and we look forward to seeing your contributions in the hackathon!

Best regards,  
The Aurora Hackathon Team 
ISTE Club

    `;
    sendMail(userEmail, subject, body);
};

// Export all the functions
module.exports = {
    sendJoinEmail,
    sendLeaveEmail,
    
    sendTeamCreationEmail,
    sendJoinRequestEmail,
    sendApprovalEmail,
    sendRejectionEmail,
    sendRemoveMemberEmail,
    
};
