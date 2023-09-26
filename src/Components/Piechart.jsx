import { Cell, Legend, Pie, PieChart, Label } from "recharts";
import PropTypes from 'prop-types';

const Piechart = ({ donationAmount, totalAmount }) => {
  const hasData = donationAmount !== 0 || totalAmount !== 0;

  if (!hasData) {
    return (
      <div>
        <p>No data available</p>
      </div>
    );
  }

  const data1 = [
    { name: `Your Donation: $${((donationAmount/totalAmount)*100).toFixed(0) }%`, value: donationAmount },
    { name: `Total Donation: $${100-((donationAmount/totalAmount)*100).toFixed(0)}%`, value: totalAmount },
  ];
  const COLORS1 = ['#00C49F', '#FF444A'];

  return (
    <div>
      <h2 className="flex justify-center text-6xl font-bold text-centre">Pie Chart</h2>
      <PieChart width={800} height={600}>
        <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={180} fill='#8884d8'>
          {data1.map((entry, index) => (
            <Cell key={index} fill={COLORS1[index % COLORS1.length]} />
          ))}
          {data1.map((entry, index) => (
            <Label
              key={index}
              position='inside'
              fill='white'
            />
          ))}
        </Pie>
        <Legend align="center" verticalAlign="bottom"  height={56} />
      </PieChart>
    </div>
  );
};

Piechart.propTypes = {
  donationAmount: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default Piechart;
