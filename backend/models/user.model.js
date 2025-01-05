const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        default: null,

    },
    collegeid: {
        type: Number,
        required: true,

    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);

// throw new CastError('Number', val, this.path, err, this);
// ^

// CastError: Cast to Number failed for value "COL1001" (type string) at path "collegeid" for model "User"
// at SchemaNumber.cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:380:11)
// at SchemaType.applySetters (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schemaType.js:1255:12)
// at SchemaNumber.castForQuery (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:434:16)
// at cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast.js:390:32)
// at cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast.js:76:20)
// at Query.cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:4892:12)
// at Query._castConditions (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:2309:10)
// at model.Query._findOne (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:2633:8)
// at model.Query.exec (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:4441:80)
// at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
// stringValue: '"COL1001"',
// messageFormat: undefined,
// kind: 'Number',
// value: 'COL1001',
// path: 'collegeid',
// reason: AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

// assert.ok(!isNaN(val))

// at castNumber (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast/number.js:27:10)
// at SchemaNumber.cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:378:12)
// at SchemaType.applySetters (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schemaType.js:1255:12)
// at SchemaNumber.castForQuery (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:434:16)
// at cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast.js:390:32)
// at cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast.js:76:20)
// at Query.cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:4892:12)
// at Query._castConditions (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:2309:10)
// at model.Query._findOne (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:2633:8)
// at model.Query.exec (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:4441:80) {
// generatedMessage: true,
// code: 'ERR_ASSERTION',
// actual: false,
// expected: true,
// operator: '=='
// },
// valueType: 'string'
// }

// Node.js v20.16.0
// mohaksinghal@MOHAKs-MacBook-Air backend % node server.js
// Server running on port 6000
// Connected to MongoDB
// Email Sent Successfully
// /Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:380
// throw new CastError('Number', val, this.path, err, this);
// ^

// CastError: Cast to Number failed for value "COL1001" (type string) at path "collegeid" for model "User"
// at SchemaNumber.cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:380:11)
// at SchemaType.applySetters (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schemaType.js:1255:12)
// at SchemaNumber.castForQuery (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:434:16)
// at cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast.js:390:32)
// at cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast.js:76:20)
// at Query.cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:4892:12)
// at Query._castConditions (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:2309:10)
// at model.Query._findOne (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:2633:8)
// at model.Query.exec (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:4441:80)
// at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
// stringValue: '"COL1001"',
// messageFormat: undefined,
// kind: 'Number',
// value: 'COL1001',
// path: 'collegeid',
// reason: AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

// assert.ok(!isNaN(val))

// at castNumber (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast/number.js:27:10)
// at SchemaNumber.cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:378:12)
// at SchemaType.applySetters (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schemaType.js:1255:12)
// at SchemaNumber.castForQuery (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/schema/number.js:434:16)
// at cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast.js:390:32)
// at cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/cast.js:76:20)
// at Query.cast (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:4892:12)
// at Query._castConditions (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:2309:10)
// at model.Query._findOne (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:2633:8)
// at model.Query.exec (/Users/mohaksinghal/Documents/GitHub/Aurora-Web-Dev-2025/backend/node_modules/mongoose/lib/query.js:4441:80) {
// generatedMessage: true,
// code: 'ERR_ASSERTION',
// actual: false,
// expected: true,
// operator: '=='
// },
// valueType: 'string'
// }
