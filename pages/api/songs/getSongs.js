 
 

const handler = async (req, res) => {
  // getMany method is used to create records in database
  try {
    const data = []
    res.json({ message: 'Success 😁', data })
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] })
  }
}

export default handler
