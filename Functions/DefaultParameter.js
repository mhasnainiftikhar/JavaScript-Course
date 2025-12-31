
const Bookings=[];

const createBooking=function(flightNum,passengers=1,price=199*passengers){
    const booking={
        flightNum,passengers,price
    };
    console.log(booking);
    Bookings.push(booking);

};
createBooking("LH13",'3')
createBooking("IS97",'23')
createBooking("QU43",'97')
createBooking("JD67",undefined,'786')
console.log(Bookings)