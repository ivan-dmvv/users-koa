const User = require('../models/user');

const allUsers = () => new Promise(async (resolve, reject) => {
    try {
        const users = await User.find();

        resolve({
            success: true,
            data: users
        });
    } catch(err) {
        reject(err);
    }
});

const getUser = ({id}) => new Promise(async (resolve, reject) => {
    try {
        if(!id) {
            resolve({
                success: false,
                data: 'ID field is required!'
            });

            return;
        }

        const foundUser = await User.findById(id);

        resolve({
            success: true,
            data: foundUser
        });
    } catch(err) {
        reject(err);
    }
});

const addUser = ({name, age}) => new Promise(async (resolve, reject) => {
    try {
        if(!name || !age) {
            resolve({
                success: false,
                data: 'Fields is required!'
            });

            return;
        }

        const newUser = new User({name, age});
        const result = await newUser.save();

        resolve({
            success: true,
            data: result
        });
    } catch(err) {
        reject(err);
    }
});

const updateUser = ({id, name, age}) => new Promise(async (resolve, reject) => {
    try {
        if(!id || !name || !age) {
            resolve({
                success: false,
                data: 'Fields is required!'
            });

            return;
        }

        const patchUser = await User.findOneAndUpdate({_id: id}, {name, age});

        resolve({
            success: true,
            data: patchUser
        });
    } catch(err) {
        reject(err);
    }
});

const deleteUser = ({id}) => new Promise(async (resolve, reject) => {
    try {
        if(!id) {
            resolve({
                success: false,
                data: 'ID field is required!'
            });

            return;
        }

        await User.deleteOne({_id: id});

        const users = await User.find();

        resolve({
            success: true,
            data: users
        });
    } catch(err) {
        reject(err);
    }
});


module.exports = { allUsers, getUser, addUser, updateUser, deleteUser };