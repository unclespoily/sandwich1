import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import burritoImage from '../resources/Foods/burrito.jpg';
import calzoneImage from '../resources/Foods/calzone.jpg';
import dumplingImage from '../resources/Foods/dumpling.jpg';
import eggrollImage from '../resources/Foods/eggroll.jpg';
import gyroImage from '../resources/Foods/gyro.jpg';
import hamburgerImage from '../resources/Foods/hamburger.jpg';
import hotdogImage from '../resources/Foods/hotdog.jpg';
import pizzaImage from '../resources/Foods/pizza.jpg';
import quesadillaImage from '../resources/Foods/quesadilla.jpg';
import samosaImage from '../resources/Foods/samosa.jpg';
import sandwichImage from '../resources/Foods/sandwich.jpg';
import soupDumplingImage from '../resources/Foods/soupDumpling.jpg';
import tacoImage from '../resources/Foods/taco.jpg';
import uncrustableImage from '../resources/Foods/uncrustable.jpg';
import randomImage from '../resources/Foods/random.jpg';

const images = [
    {src: randomImage, alt: "Random Food"},
    {src: sandwichImage, alt: "Sandwich"},
    {src: hamburgerImage, alt: "Hamburger"},
    {src: hotdogImage, alt: "Hotdog"},
    {src: pizzaImage, alt: "Pizza"},
    {src: burritoImage, alt: "Burrito"},
    {src: dumplingImage, alt: "Dumpling"},
    {src: calzoneImage, alt: "Calzone"},
    {src: eggrollImage, alt: "Egg Roll"},
    {src: gyroImage, alt: "Gyro"},
    {src: quesadillaImage, alt: "Quesadilla"},
    {src: samosaImage, alt: "Samosa"},
    {src: soupDumplingImage, alt: "Soup Dumpling"},
    {src: tacoImage, alt: "Taco"},
    {src: uncrustableImage, alt: "Uncrustable"}
];

const SandwichSession: React.FC = () => {
    const {sessionId} = useParams() as { sessionId: string };
    const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ marginLeft: '20px', marginRight: '20px', flex: 1, position: 'relative' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Session ID: {sessionId}</h1>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5em' }}>Select a Food:</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', justifyContent: 'center' }}>
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} onClick={() => setSelectedImage(image)} />
                    ))}
                </div>
                {selectedImage && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(50,50,50,.90)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={selectedImage.src} alt={selectedImage.alt} style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }} />
                        <h3 style={{ color: 'white', marginTop: '20px' }}>{selectedImage.alt}</h3>
                        <button onClick={() => setSelectedImage(null)}>Start Discussion: TBD</button>
                        <button onClick={() => setSelectedImage(null)}>Back</button>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default SandwichSession;