import { GoogleMapsEmbed } from "@next/third-parties/google";

function Map() {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.GOOGLE_MAPS_API_KEY as string}
      height={286}
      width="100%"
      mode="place"
      zoom="17"
      q="Mestinje+6,Podplat"
    />
  );
}

export default Map;
