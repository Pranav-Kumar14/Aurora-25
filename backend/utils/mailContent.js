const { sendMail } = require('./mail.js');

// Send welcome email
const sendJoinEmail = (userEmail) => {
    const subject = 'Welcome to Aurora Hackathon – Let the Innovation Begin!';
    const body = `
        Dear Participant,

        We are thrilled to welcome you to the Aurora Hackathon, the flagship event of ISTE! This is your chance to showcase your creativity, skills, and innovative ideas.

        The competition promises to be an exciting journey of learning and collaboration. Stay tuned for updates, guidelines, and tips to help you make the most of this experience.

        If you have any questions or need assistance, feel free to reach out to us at aurora.hackathon@iste.com.

        We look forward to your active participation.

        Sincerely,
        The Aurora Hackathon Team
        ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Send leave email
const sendLeaveEmail = (userEmail) => {
    const subject = 'We’re Sorry to See You Leave the Aurora Hackathon';
    const body = `
        Dear Participant,

        We regret to inform you that your participation in the Aurora Hackathon has been deactivated. While we’re saddened by this, we respect your decision and hope to see you in our future events.

        If you change your mind, feel free to contact us at aurora.hackathon@iste.com for guidance on rejoining.

        Wishing you the very best in your endeavors.

        Sincerely,
        The Aurora Hackathon Team
        ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Send status update email
// const sendStatusUpdateEmail = (userEmail, status) => {
//     const subject = 'Update on Your Aurora Hackathon Status';
//     const body = `
//         Dear Participant,

//         We hope this message finds you well. Please note that your status for the Aurora Hackathon has been updated to: ${status}.

//         If you have any questions or require clarification, do not hesitate to reach out to us at aurora.hackathon@iste.com.

//         Thank you for being a valued participant, and we look forward to seeing your contributions to this exciting event.

//         Sincerely,
//         The Aurora Hackathon Team
//         ISTE Club
//     `;
//     sendMail(userEmail, subject, body);
// };

// Send team creation email
const sendTeamCreationEmail = (userEmail, teamName, teamLeader) => {
    const subject = `Congratulations on Creating Team: ${teamName} for Aurora!`;
    const body = `
        Dear ${teamLeader},

        Congratulations on successfully creating your team, ${teamName}, for the Aurora Hackathon, the flagship event of ISTE!

        This is your opportunity to collaborate, innovate, and shine. We are confident that your team will bring forward creative solutions and demonstrate excellence in the competition.

        For any assistance, please don’t hesitate to reach out to us at aurora.hackathon@iste.com.

        Wishing you the very best of luck!

        Sincerely,
        The Aurora Hackathon Team
        ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Send team join request email
const sendJoinRequestEmail = (teamLeaderEmail, teamName, userName) => {
    const subject = `${userName} Wants to Join Your Team: ${teamName} for Aurora!`;
    const body = `
        Dear Team Leader,

        We hope you’re doing well.

        You’ve received a new request from ${userName} to join your team, ${teamName}, for the Aurora Hackathon.

        Please log in to your account to review the request and take appropriate action. If you need assistance, contact us at aurora.hackathon@iste.com.

        Thank you for your leadership, and good luck with your team!

        Sincerely,
        The Aurora Hackathon Team
        ISTE Club
    `;
    sendMail(teamLeaderEmail, subject, body);
};

// Send team approval email
const sendApprovalEmail = (userEmail, teamName) => {
    const subject = `Welcome to Team ${teamName} for Aurora Hackathon!`;
    const body = `
        Dear Participant,

        We are excited to inform you that your request to join the team ${teamName} for the Aurora Hackathon has been approved!

        This is your moment to collaborate and shine with your team. Please reach out to your team leader for further details.

        If you have any questions, feel free to contact us at aurora.hackathon@iste.com.

        Best of luck!

        Sincerely,
        The Aurora Hackathon Team
        ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Send team rejection email
const sendRejectionEmail = (userEmail, teamName) => {
    const subject = `Your Request to Join Team ${teamName} Has Been Rejected`;
    const body = `
        Dear Participant,

        We regret to inform you that your request to join the team ${teamName} for the Aurora Hackathon has been rejected.

        Don’t be disheartened! There are many other teams and opportunities waiting for you. If you need assistance exploring options, feel free to reach out to us at aurora.hackathon@iste.com.

        Thank you for your interest, and we look forward to your participation in future events.

        Sincerely,
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

        We regret to inform you that you have been removed from the team ${teamName} for the Aurora Hackathon.

        If you believe this was a mistake or wish to discuss the matter, please contact your team leader or reach out to us at aurora.hackathon@iste.com.

        We appreciate your understanding and wish you the best of luck in your endeavors.

        Sincerely,
        The Aurora Hackathon Team
        ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Send status change email
const sendStatusChangeEmail = (userEmail, status) => {
    const subject = 'Aurora Hackathon: Update on Your Participation Status';
    const body = `
        Dear Participant,

        We want to inform you that your participation status for the Aurora Hackathon has been updated to: ${status}.

        If you have any concerns or need further clarification, feel free to reach out to us at aurora.hackathon@iste.com.

        Thank you for your commitment, and we look forward to your valuable contributions to the event.

        Sincerely,
        The Aurora Hackathon Team
        ISTE Club
    `;
    sendMail(userEmail, subject, body);
};

// Export all the functions
module.exports = {
    sendJoinEmail,
    sendLeaveEmail,
    // sendStatusUpdateEmail,
    sendTeamCreationEmail,
    sendJoinRequestEmail,
    sendApprovalEmail,
    sendRejectionEmail,
    sendRemoveMemberEmail,
    sendStatusChangeEmail,
};
