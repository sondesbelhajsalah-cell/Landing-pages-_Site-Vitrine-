import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  const word = light ? "#ffffff" : "#243140";

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image src={"/logo.jpeg"} alt="Logo" width={70} height={50} />
    </span>
  );
}
