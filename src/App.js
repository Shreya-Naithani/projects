import Card from './Component/Card';
import React from 'react';

function App() {
  const data = [
    { id: 1, name: 'John Doe', job: 'General Practitioner', image: 'https://img.freepik.com/free-photo/confident-therapist-with-pen_23-2147896595.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=ais' },
    { id: 2, name: 'Ella Rose', job: 'Surgeon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxpdQUrqUadqVBndCwPXbEY1timGdV7foLOq-ZS_i1g&s' },
    { id: 3, name: 'Alexander Johnson', job: 'Pediatrician', image: 'https://thumbs.dreamstime.com/b/happy-young-male-doctor-man-smile-handsome-15357662.jpg' },
    { id: 4, name: 'Lily Grace', job: 'Cardiologist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8PZOhO1nJYVlKtuISKcAdy4Z9hNo1l5VIc7adFCN-Q&s' },
    { id: 5, name: 'Benjamin Davis', job: 'Dermatologist', image: 'https://img.freepik.com/free-photo/portrait-candid-male-doctor_329181-611.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=ais' },
    { id: 6, name: 'Mia Jade', job: 'Orthopedic Surgeon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI35z0oc8wsiN2JRQDZE_ci9ySjegj0rvukdk39K85qQ&s' },
    { id: 7, name: 'Christopher Miller', job: 'Neurologist', image: 'https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg' },
    { id: 8, name: 'Ava Belle', job: 'Obstetrician', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yScmkpMptSbwfm8eRZpZAC31Pn0mGFq7sCfhKm6B4A&s' },
    { id: 9, name: 'Daniel Brown', job: 'Ophthalmologist', image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-600nw-1954278664.jpg' },
    { id: 10, name: 'Zoe Faith', job: 'Gynecologist', image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708646400&semt=ais' },
    { id: 11, name: 'Ethan Wilson', job: 'Urologist', image: 'https://thumbs.dreamstime.com/b/outdoor-portrait-male-doctor-wearing-white-lab-coat-smiling-to-camera-35801901.jpg' },
    { id: 12, name: 'Emma Hope', job: 'Dentist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByEDuTyU_0jRAJ7q3n5xhUj8r4RIieSwEgZCfo8kpqg&s' },
    { id: 13, name: 'Gavin Thompson', job: 'Gastroenterologist', image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-old-male-600nw-1769847965.jpg' },
    { id: 14, name: 'Ivy Claire', job: 'Endocrinologist', image: 'https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg' },
    { id: 15, name: 'Henry Harris', job: 'Nephrologist', image: 'https://thumbs.dreamstime.com/b/male-doctor-portrait-isolated-white-background-56744085.jpg' },
    { id: 16, name: 'Ruby Sky', job: 'SPulmonologist', image: 'https://media.istockphoto.com/id/479378798/photo/portrait-of-female-doctor.jpg?s=612x612&w=0&k=20&c=P-W8KSJBYhYj2RSx1Zhff6FCGvtRDC3AAzox8deMmew=' },
    { id: 17, name: 'Isaac Carter', job: 'Rheumatologist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXevDGYf5-QFMb50-m7DalyoMfxplLTTGcNT6sQyH56A&s' },
    { id: 18, name: 'Ella Mae', job: 'Oncologist', image: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg' },
    { id: 19, name: 'Jacob Reed', job: 'Hematologist', image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-old-male-600nw-1769847965.jpg' },
    { id: 20, name: 'Lily June', job: 'Psychiatrist', image: 'https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg' },
    { id: 21, name: 'Kevin Mitchell', job: 'Neurosurgeon', image: 'https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo=' },
    { id: 22, name: 'Liam Anderson', job: 'Anesthesiologistr', image: 'https://img.freepik.com/free-photo/doctors-day-handsome-brunette-cute-guy-medical-gown-with-hands-pocket_140725-162944.jpg' },
    { id: 23, name: 'Mason Turner', job: 'Radiologist', image: 'https://img.freepik.com/premium-photo/smiling-male-doctor-lab-coat-with-arms-crossed-against-blue-background_168410-2825.jpg' },
    { id: 24, name: 'Noah Parker', job: 'Pathologist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuakOYCRN5_69F8o3VGyvEOsSwKFOYl8zNDKgM6PB4W86tNdcJDZALBYS0r4uca04_FM&usqp=CAU' },
    { id: 25, name: 'Oliver Martinez', job: 'Physiotherapistr', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4NTLazwJA77O0B-Bnx0szHlwEgb5fvfF9Vjaq6DVOz7w8RmSicRJkN37ttnCz9pJnjI&usqp=CAU' },
  ];
  return (
    <div>
      <h1 className='text-4xl flex justify-center items-center my-5'>Select Doctor</h1>
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {data.map((person) => (
      <Card key={person.id} {...person} />
    ))}
  </div>
  </div>
  );
}

export default App;
