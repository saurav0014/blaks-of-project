import Image from "next/image";
import streetlight from "../../../public/Images/street_light_controler.png"
import gateway from "../../../public/Images/gateway_png.png"
import cloudbasedmanagement from "../../../public/Images/cloud_based management.png"
import user from "../../../public/Images/users_png.png"
import evaluation from "../../../public/Images/evaluation_png.png"

const Ecosystem = () => {
  return (
    <section className="px-[10%] xl:px-[14%] py-24 bg-gradient-to-r from-[#FFFFFF] from-10% via-[#f0f4f8db] via-40% to-[#f3fafd] to-80% ">
      <div className="max-w-[400px] xl:max-w-[600px]">
        <p className="bg-gradient-to-r from-[#97abf4] text-[#00386B] w-12 h-12 text-2xl py-2 px-8 font-semibold">
          Ecosystem
        </p>
        <p className="text-xl sm:text-3xl xl:text-5xl leading-tight mt-5">
          How does a smart street light ecosystem work?
        </p>
      </div>

      <div className="no-scrollbar mt-5 lg:mt-20 overflow-x-auto relative">
        <div className="flex flex-col lg:flex-row lg:min-w-[1000px] pt-6">
          <div className="flex flex-col justify-center items-center basis-72">
            <div className="flex gap-16">
              <div className="border border-[#3661FF] p-4 w-20 rounded-3xl outline-dashed outline-2 outline-offset-8 outline-[#3661FF]">
                <Image
                  src={streetlight}
                  width={44}
                  height={44}
                  alt="street light"
                />
              </div>

              <div className="border border-[#3661FF] p-4 w-20 rounded-3xl outline-dashed outline-2 outline-offset-8 outline-[#3661FF]">
                <Image
                  src={streetlight}
                  width={44}
                  height={44}
                  alt="street light"
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="font-semibold">Street Light Controller</p>
              <p className="text-[#626262]">
                Activates/deactivates in response to motion/light sensing and
                controls the brightness of the street lamp
              </p>
            </div>
          </div>

          <div className="flex flex-col grow relative">
            <div className="hidden lg:block border-t-[3px] border-dashed w-[240px] absolute top-1/4 left-[-18px]"></div>
          </div>

          <div className="flex flex-col justify-center items-center basis-64">
            <div className="border border-[#CDCDCD] p-4 w-32 rounded-3xl outline-dashed outline-2 outline-offset-8 outline-[#CDCDCD]">
              <Image src={gateway} width={90} height={90} alt="gateway" />
            </div>

            <div className="text-center mt-6">
              <p className="font-semibold">Gateway</p>
              <p className="text-[#626262]">
                Employed for interfacing between a Controller and the Lighting
                Management Software.
              </p>
            </div>
          </div>

          <div className="flex flex-col grow relative">
            <div className="hidden lg:block border-t-[3px] border-dashed w-[252px] absolute top-1/4 left-[-48px]"></div>
          </div>

          <div className="flex flex-col justify-center items-center basis-52">
            <div className="border border-[#CDCDCD] p-4 w-28 rounded-3xl outline-dashed outline-2 outline-offset-8 outline-[#CDCDCD]">
              <Image
                src={cloudbasedmanagement}
                width={80}
                height={80}
                alt="cloud based management"
              />
            </div>

            <div className="text-center mt-6">
              <p className="font-semibold">Cloud-based Management System</p>
              <p className="text-[#626262]">
                Collects information from multiple gateways.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col  2xl:min-w-[1000px]">
          <div className="hidden lg:block relative h-20">
            <div className="border-r-[3px] border-dashed absolute left-[54%] h-20"></div>
          </div>

          <div className="relative h-2">
            <div className="hidden lg:block  border-t-[3px] border-dashed absolute left-[40%] w-80"></div>
          </div>

          <div className="relative h-8">
            <div className="border-r-[3px] border-dashed absolute left-[40%] h-4"></div>
            <div className="border-r-[3px] border-dashed absolute left-[69%] h-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-[50px] lg:gap-[148px] lg:ml-24 ml-5">
            <div className="flex flex-col justify-center items-center basis-44">
              <div className="relative border border-[#CDCDCD] p-4 w-28 rounded-3xl outline-dashed outline-2 outline-offset-8 outline-[#CDCDCD]">
                <Image
                  src={user}
                  width={80}
                  height={80}
                  alt="global users"
                />
              </div>

              <div className="text-center mt-6">
                <p className="font-semibold">Users</p>
                <p className="text-[#626262]">
                  Data from the cloud is used to monitor and control street
                  lights by the System Managers.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center basis-44">
              <div className="border border-[#CDCDCD] p-4 w-28 rounded-3xl outline-dashed outline-2 outline-offset-8 outline-[#CDCDCD]">
                <Image
                  src={evaluation}
                  width={80}
                  height={80}
                  alt="evaluation"
                />
              </div>

              <div className="text-center mt-6">
                <p className="font-semibold">Evaluation</p>
                <p className="text-[#626262]">
                  Gathered insights are used to evaluate the performance of the
                  lighting systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;