import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "../ui/avatar";
import { FaCheck } from "react-icons/fa";
import user from "../../../public/user.jpg"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-slate-300 p-4">
      <h1 className="text-2xl font-semibold sm:dowellText">DoWell Newsletter</h1>
      <div className="flex gap-4 items-center">
        <h1 className="text-xl font-bold text-black">Yabibal E.</h1>
        <Dialog>
          <DialogTrigger className="relative">
            <Avatar>
              {/* Updated image URL */}
              <AvatarImage src={user} alt="User Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] z-50">
            <DialogHeader>
              <DialogTitle className="text-xl">Manage Subscriptions</DialogTitle>
              <hr className="text-slate-400 my-2" />
              <DialogDescription>
                {/* Newsletter Frequency */}
                <div className="flex justify-between items-center my-4">
                  <h1 className="text-[16px] font-semibold">Newsletter Frequency</h1>
                  <select
                    name="frequency"
                    id="frequency"
                    className="border-2 border-slate-400 rounded-md p-2"
                  >
                    <option value="weekly" className="text-slate-900 font-semibold" defaultChecked>
                      Weekly
                    </option>
                    <option value="daily" className="text-slate-900 font-semibold">
                      Daily
                    </option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                {/* Pause Subscription */}
                <div className="flex justify-between items-center my-6">
                  <h1 className="text-[16px] font-semibold">Pause Subscription</h1>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="hidden peer" />
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-md peer-checked:bg-black peer-checked:border-black flex items-center justify-center">
                      <FaCheck className="hidden peer-checked:block text-white" />
                    </div>
                  </label>
                </div>

                {/* Unsubscribe Section */}
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    If you no longer wish to receive any newsletters or updates, you can unsubscribe
                    from all communications. Please note that this action will stop all future
                    emails from our service.
                  </p>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md focus:outline-none"
                  >
                    Unsubscribe
                  </button>
                </div>
              </DialogDescription>

              {/* Save Button */}
              <div className="flex justify-end mt-4">
                <button className="text-white bg-black hover:bg-gray-800 rounded-md px-4 py-2">
                  Save
                </button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
