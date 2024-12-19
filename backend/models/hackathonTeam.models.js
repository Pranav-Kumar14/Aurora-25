const teamSchema = new mongoose.Schema(
    {
      name: { 
        type: String, 
        required: true,
        unique: true,
      },
      leader: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true,
        unique: true,
      },
      members: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
      }],
      teamCode: { 
        type: String, 
        required: true,
        unique: true,
      },
    },
    { timestamps: true }
  );

export const Team = mongoose.model('Team', teamSchema);
  