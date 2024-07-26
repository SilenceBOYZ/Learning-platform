import Heading from "../Heading"

function RectagleStatistic({ title, value, children, bgColor = "bg-white" }) {
  return (
    <div className={`w-full bg-white flex items-center box-border px-4 py-4  rounded-md gap-3 shadow-md`}>
      <div className={`flex justify-center items-center rounded-full ${bgColor} w-16 h-16`}>
        {children}
      </div>
      
      <div>
        <Heading custom="text-lg">{title}</Heading>
        <span className="text-sm">{value}</span>
      </div>
    </div>
  )
}

export default RectagleStatistic
