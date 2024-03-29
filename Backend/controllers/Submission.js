const Submission = require("../models/Submission");

exports.addSubmission = async (req, res) => {
    try {
        const { username, codeLanguage, stdin, sourceCode } = req.body;

        if (!username || !codeLanguage || !stdin || !sourceCode) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const submission = new Submission({
            username,
            codeLanguage,
            stdin,
            sourceCode
        });

        await submission.save();

        return res.status(201).json({
            success: true,
            message: "Submission added successfully",
            submission: submission
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.getAllSubmission = async (req, res) => {
    try {
        const submissions = await Submission.find();
        return res.status(200).json({
            success: true,
            submissions: submissions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};