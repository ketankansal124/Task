const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    username: {
        type: String, required: true
    },
    codeLanguage: {
        type: String, required: true
    },
    stdin: {
        type: String
    },
    sourceCode: {
        type: String, required: true
    },
    timestamp: {
        type: Date, default: Date.now
    },
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
