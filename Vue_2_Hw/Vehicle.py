from abc import ABCMeta, abstractmethod # Вспомогательный класс, имеющий ABCMetaметакласс. С помощью этого класса можно создать абстрактный базовый класс, просто унаследовав его от ABC



class Vehicle(metaclass=ABCMeta):
    def __init__(self, company: str,
                 model: str,
                 year: int,
                 wheels: int,
                 speed: int):
        self._company = company
        self._model = model
        self._year = year
        self._wheels = wheels
        self._speed = speed

    @abstractmethod      # Декоратор @abstractmethod может использоваться для объявления абстрактных методов свойств
    def test_drive(self) -> None:
        pass

    @abstractmethod
    def park(self) -> None:
        pass

    @property # Декоратор @property используется для определения метода, который можно вызывать, как если бы он был атрибутом
    def company(self):
        return self._company

    @property
    def model(self):
        return self._model

    @property
    def year_release(self):
        return self._year

    @property
    def num_wheels(self):
        return self.wheels

    @property
    def speed(self):
        return self._speed

class Motorcycle(Vehicle):
    def __init__(self, company: str, model: str, year: int): # __init__ — это специальная функция, которая вызывается при создании нового объекта класса. Она также известна как конструктор класса. Это место, где обычно устанавливаются начальные значения атрибутов класса.
        super().__init__(company, model, year, wheels=2, speed=0)

    def test_drive(self) -> None:
        self._speed = 75

    def park(self) -> None:
        self._speed = 0

    def __repr__(self):
        return f'Motorcycle("{self._company}", "{self._model}", {self._year})'

class Car(Vehicle):
    def __init__(self, company: str, model: str, year: int):
        super().__init__(company, model, year, wheels=4, speed=0) # super().__init__() вызывает метод инициализации из родительского класса. Например, чтобы дополнить его.

    def test_drive(self) -> None:
        self._speed = 60

    def park(self) -> None:
        self._speed = 0

    def __repr__(self):
        return f'Car("{self._company}", "{self._model}", {self._year})'