import React from "react";
import Container from "react-bootstrap/Container";

import PuppyList from "./PuppyList";
import { Link } from "react-router-dom";
function Puppies() {
  let puppies = [
    {
      name: "Bilbo (Marley)",
      imageSm: "/images/small/bilbo-min.jpg",
      imageFull: "/images/fullsize/bilbo.jpg",
      desc: `Bilbo is such a chunk! He is so sweet and loves to play with his ball. He has white on his head and chest and darker brown throughout. His hair will be a little more on the curlier side.`,
    },
    {
      name: "Frodo (Jasper)",
      imageSm: "/images/small/frodo-min.jpg",
      imageFull: "/images/fullsize/frodo.jpg",
      desc: `Frodo is a darker brown with hints of white on his chest and belly. He is sweet and mild-tempered. He loves to be held and to play.`,
    },
    {
      name: "Samwise (Milo)",
      imageSm: "/images/small/samwise-min.jpg",
      imageFull: "/images/fullsize/samwise.jpg",
      desc: "Samwise is the most colorful of our pups. He loves to play and to take long naps. He is smart and loves to give kisses!",
    },
    {
      name: "Merry (Maggie)",
      imageSm: "/images/small/merry-min.jpg",
      imageFull: "/images/fullsize/merry.jpg",
      desc: "Merry is the smallest in the litter and the only female available. She looks just like her mom and is the sweetest girl. She loves to be held and give kisses.",
    },

    {
      name: "Pippin (Bailey)",
      imageSm: "/images/small/pippin-min.jpg",
      imageFull: "/images/fullsize/pippin.jpg",
      desc: "Pippin is the biggest puppy in the litter, but he is so sweet. He loves to eat and chase balls. He also loves to run around. He will also look like his mom!",
    },
  ];
  return (
    <Container>
      <h2 className="text-center">Honey's Hobbit Litter</h2>
      <h5 className="text-center mt-4">They were born on August 1st, 2022. These puppies are all in their new "furever" homes.</h5>
      <PuppyList puppies={puppies} />
      <h5 className="text-center my-5">
        <Link style={{ color: "#7CB2BE" }} to="/parents">
          Their parents are Honey and Louis
        </Link>
      </h5>
      {/* <h3 style={{ color: "#7CB2BE" }} className=" my-5 text-center roboto">
       <em>Puppy prices start at $1800.</em> 
      </h3> */}
      <h4 className="text-center">We do not have a waitlist at this time. <u>There are no plans for Mini Goldendoodles in the near future.</u></h4>
      {/* <h3 className=" my-5 text-center roboto">
       Puppy prices start at $1800. $500 non-refundable deposit due at the time of reservation of a specific puppy. 
      </h3> */}
      {/* <h2>Call or text Dallin at (385) 200-4172 to inquire about puppy
        reservations and visits.</h2> */}
    </Container>
  );
}

export default Puppies;
