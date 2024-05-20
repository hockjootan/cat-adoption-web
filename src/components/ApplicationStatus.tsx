interface ApplicationStatusProps {
  applications: {
    catName: string;
    status: string;
  }[];
}

const ApplicationStatus: React.FC<ApplicationStatusProps> = ({
  applications,
}) => {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-xl font-bold mb-4">Application Status</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-left">
            <th className="px-4 py-1">Cat Name</th>
            <th className="px-4 py-1">Status</th>
            <th className="px-4 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-2">{application.catName}</td>
              <td className="px-4 py-2">{application.status}</td>
              <td className="px-4 py-2">
                <button className="text-teal-600 hover:text-teal-400">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationStatus;
