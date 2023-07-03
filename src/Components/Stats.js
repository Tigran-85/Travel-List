export default function Stats({ items }) {
    if (!items.length) {
      return (
        <p className="stats">
          <em>
            Start adding some items to your packing list 🚀
          </em>
        </p>
      )
    }
  
    const itemLength = items.length;
    const packedLength = items.filter(item => item.packed).length;
    const persentage = Math.round(packedLength/itemLength * 100);
    return (
      <footer className="stats">
        <em>
        { persentage === 100 ? 
        "You got everything! Ready to go ✈" : 
        `💼 You have ${itemLength} items on your list, and you already packed ${packedLength} (${persentage}%)`
        }
        </em>
        </footer>
    
    );
  }