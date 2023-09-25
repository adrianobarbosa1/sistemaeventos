import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import FormServidor from "@/components/FormServidor";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Perfil de usuário",
  description: "Página de perfl do usuário",
  // other metadata
};

const Profile = () => {
  return (
    <>
      <Breadcrumb pageName="Perfil" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={"/images/cover/cover-02.jpg"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={260}
          />
        </div>
        <div className="px-4 pb-6 lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <Image
                src={"/images/user/user-15.png"}
                width={160}
                height={160}
                alt="profile"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl text-center font-semibold text-black dark:text-white">
              Adriano Barbosa dos Santos
            </h3>
            <p className="font-medium text-center">
              MATRICULA: <span>27174</span>
            </p>

            {/* <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>
              <p className="mt-4.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div> */}

            <FormServidor />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
