import { GoogleMapsEmbed } from "@next/third-parties/google";
import { cookies } from "next/headers";
import MapButton from "./MapButton";

function Map({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const consent = cookies().get("thirdPartyConsent")?.value;

  return (
    <>
      {consent === "true" ? (
        <GoogleMapsEmbed
          apiKey={process.env.GOOGLE_MAPS_API_KEY as string}
          height={286}
          width="100%"
          mode="place"
          zoom="17"
          q="Mestinje+6,Podplat"
        />
      ) : (
        <div className="font-raj text-xl font-semibold text-primary">
          {slo
            ? "Če želite videti našo lokacijo na Google Zemljevidih, sprejmite naše piškotke tretjih oseb"
            : srb
            ? "Ako želite da vidite našu lokaciju na Google Maps, prihvatite kolačiće treće strane"
            : "If you want to see our location on Google Maps, please accept our third party cookies "}{" "}
          <MapButton srb={srb} slo={slo} />
        </div>
      )}
    </>
  );
}

export default Map;
