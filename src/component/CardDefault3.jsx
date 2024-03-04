import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const CardDefault3 = () => {
  return (
    <div>
          <Card className="mt-6 w-92">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://preview.colorlib.com/theme/cohost/images/image_3.jpg" 
          alt=""
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Webni belgilang
        </Typography>
        <Typography>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default CardDefault3