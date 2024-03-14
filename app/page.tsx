import ChooseItem from "@/components/shared/ChooseItem";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-y-8 p-5">
      <div className="flex flex-col gap-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Задача 1. Передвинуть нули в конец массива</h2>
          <p className="text-lg">Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок других элементов.</p>
          <div className="mt-4">
            <code>
              moveZeros([false,1,0,1,2,0,1,3,&quot;a&quot;]) // returns[false,1,1,2,1,3,&quot;a&quot;,0,0]
            </code>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Решение</h3>
          <div className="mt-4">
            <code>
              <pre>
                {`
                  function moveZeros(arr: any[]): any[] {
                    let nonZeroIndex = 0;

                    for (let i = 0; i < arr.length; i++) {
                      if (arr[i] !== 0) {
                        [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
                        nonZeroIndex++;
                      }
                    }

                    return arr;
                  };

                  console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [ false, 1, 1, 2, 1, 3, 'a', 0, 0 ]
                `}
              </pre>
            </code>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Задача 2. Select на React</h2>
          <p className="text-lg">Напишите React-компонент выбора из выпадающего меню.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">Решение</h3>
          <div className="mt-4">
            <ChooseItem />
          </div>
        </div>
      </div>
    </main>
  );
};
