import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const AccardionCom = () => {
    const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion className="  mt-5" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="bg-white flex justify-center rounded-[50px] pl-8" onClick={() => handleOpen(1)}>Hisobni Qanday Qilish  Kerak ?</AccordionHeader>
        <AccordionBody className="font-bold">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="  mt-4"  open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="bg-white flex justify-center rounded-[50px] pl-8" onClick={() => handleOpen(2)}>
          Boshqaruv Panelini Qanday Qilish Kerak ?
        </AccordionHeader>
        <AccordionBody className="font-bold">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="  mt-4"  open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="bg-white flex justify-center rounded-[50px] pl-8" onClick={() => handleOpen(3)}>
          Bu Korxonalarga Qanday Talab Qo'yiladi ?
        </AccordionHeader>
        <AccordionBody className="font-bold">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  )
}

export default AccardionCom