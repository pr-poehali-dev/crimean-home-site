import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Calculator = () => {
  const [area, setArea] = useState('100');
  const [floors, setFloors] = useState('1');
  const [material, setMaterial] = useState('brick');
  const [foundation, setFoundation] = useState('strip');
  const [result, setResult] = useState<number | null>(null);

  const materials = {
    brick: { name: 'Кирпич', pricePerM2: 45000 },
    blocks: { name: 'Газоблоки', pricePerM2: 35000 },
    frame: { name: 'Каркасный', pricePerM2: 28000 },
    wood: { name: 'Брус/Бревно', pricePerM2: 38000 },
  };

  const foundations = {
    strip: { name: 'Ленточный', coefficient: 1.0 },
    slab: { name: 'Монолитная плита', coefficient: 1.15 },
    pile: { name: 'Свайный', coefficient: 0.9 },
  };

  const calculateCost = () => {
    const areaNum = parseFloat(area) || 0;
    const floorsNum = parseInt(floors) || 1;
    const materialPrice = materials[material as keyof typeof materials].pricePerM2;
    const foundationCoef = foundations[foundation as keyof typeof foundations].coefficient;
    
    const floorsCoefficient = floorsNum === 1 ? 1 : floorsNum === 2 ? 1.8 : 2.5;
    
    const totalCost = areaNum * materialPrice * floorsCoefficient * foundationCoef;
    setResult(Math.round(totalCost));
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₽';
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте предварительную стоимость строительства вашего дома
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" className="text-primary" />
                Параметры строительства
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="area">Площадь дома (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    min="30"
                    max="500"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="floors">Количество этажей</Label>
                  <Select value={floors} onValueChange={setFloors}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 этаж</SelectItem>
                      <SelectItem value="2">2 этажа</SelectItem>
                      <SelectItem value="3">3 этажа</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="material">Материал стен</Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(materials).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="foundation">Тип фундамента</Label>
                  <Select value={foundation} onValueChange={setFoundation}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(foundations).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={calculateCost}
                className="w-full mb-6"
                size="lg"
              >
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>

              {result && (
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 text-center animate-fade-in">
                  <p className="text-muted-foreground mb-2">
                    Предварительная стоимость строительства:
                  </p>
                  <p className="text-4xl font-heading font-bold text-primary">
                    {formatPrice(result)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Итоговая стоимость может отличаться в зависимости от выбранных материалов и сложности проекта
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
