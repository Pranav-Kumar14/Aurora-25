const eventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        unique: true,
        index: true
    },
    description: { 
        type: String 
    },
    date: { 
        type: Date, 
        required: true 
    },
    category: { 
        type: String, 
        enum: ['workshop', 'speaker', 'tech-expo', 'hackathon'], 
        required: true },
    registeredUsers: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }],
  }, { timestamps: true });

  
export const Event = mongoose.model('Event', eventSchema);