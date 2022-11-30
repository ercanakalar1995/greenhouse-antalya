const Form = require('../models/FormModel');
const catchAsync = require('./../helpers/catchAsync');
const sendEmail = require('./../helpers/email');

exports.createForm = catchAsync(async (req, res) => {
  const { name, email, message } = req.body;

  const checkEmail = await Form.findOne({ email });

  if (checkEmail) {
    const formId = checkEmail._id.valueOf();

    checkEmail.message.push(message);

    const updatedForm = await Form.findOneAndUpdate(
      { _id: formId },
      { message: checkEmail.message },
      {
        new: true,
      },
    );
    const lastMessage = updatedForm.message[updatedForm.message.length - 1];
    sendEmail({ name, email, lastMessage });
    res.status(200).json({
      status: 'success',
      form: {
        message: updatedForm.message,
      },
    });
  } else {
    const form = await Form.create({
      name,
      email,
      message,
    });
    sendEmail({ name, email, message });

    res.status(200).json({
      status: 'success',
      form: {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    });
  }
});
