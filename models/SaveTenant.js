const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const PostSchema = new Schema({

    accountName: {
        type: String,
        required: false
    },

    tenantId: {
        type: String,
        required: false
    },

    obProductionUserName: {
        type: String,
        required: false
    },
    obProductionPassword: {
        type: String,
        required: false
    },
    obSandboxUserName: {
        type: String,
        required: false
    },
    obSandboxPassword: {
        type: String,
        required: false
    },
    customerName: {
        type: String,
        required: false
    },
    customerEmail: {
        type: String,
        required: false
    },
    supportLead: {
        type: String,
        required: false
    },
    onboardingLead: {
        type: String,
        required: false
    },
    ftpusername: {
        type: String,
        required: false
    },
    ftppassword: {
        type: String,
        required: false
    },
    proactiveUserName: {
        type: String,
        required: false
    },
    proactivePassword: {

        type: String,
        required: false

    },

    file: {
        type: String
    }

});

module.exports = mongoose.model('obkyc', PostSchema);