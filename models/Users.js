const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
	username: {
		type: String,
		trim:true
	},
	password: {
		type: String,
		trim: true
	}
})


userSchema.methods.encryptPassword = (password) => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.comparePassword = function(password){
	return bcrypt.compareSync(password, this.password)
};

module.exports = model('users', userSchema);