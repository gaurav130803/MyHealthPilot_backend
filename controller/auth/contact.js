const Contact=require("../../models/Contact.model")

const contact= async (req,res)=>{
      const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ success: false, message: 'Email and message are required' });
  }

  try {
    const newContact = new Contact({ email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message submitted successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}

module.exports=contact;