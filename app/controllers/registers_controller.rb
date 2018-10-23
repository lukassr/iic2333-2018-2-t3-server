class RegistersController < ApplicationController
    def register
        @register = Register.new(ip: request.remote_ip)
        @register.save
    end

    def power
        @ips = []
        10.times do |i|
            rg = Random.new
            number = rg.rand(1..Register.count)
            if (number = 0)
                number = 1
            end
            ip = Register.find(number)
            @ips << ip
        end
    end
end
