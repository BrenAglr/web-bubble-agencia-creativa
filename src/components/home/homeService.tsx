import ServiceList from "./serviceList";
import TextIntro from "./textIntro";
import TextWork from "./textWork";

export default function HomeService() {
    return (
        <div className="w-full">
          <TextIntro />
          <div className="flex flex-col lg:flex-row justify-between items-start py-6 gap-12">
            <div className="flex-1">
              <TextWork />
            </div>
            <div className="flex-1">
              <ServiceList />
            </div>
          </div>
        </div>
      );
  }