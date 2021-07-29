export const Song = ({ track }) => {
    return (
        <iframe 
            src={`https://open.spotify.com/embed/track/${track}`}
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowtransparency="true" 
            allow="encrypted-media"
        ></iframe>
    );
};