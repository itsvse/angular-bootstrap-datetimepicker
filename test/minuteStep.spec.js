/**
 CONTENTS PROPRIETARY AND CONFIDENTIAL

 Copyright © 2013 Knight Rider Consulting, Inc. All rights reserved.
 http://www.knightrider.com

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES INCLUDING,
 BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */

/**
 *
 *    @author        Dale "Ducky" Lotts
 *    @since        7/21/13
 */

describe('minuteStep', function () {
    var $rootScope, element, $compile;
    beforeEach(module('ui.bootstrap.datetimepicker'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $rootScope.date = null;
    }));

    describe('throws exception', function () {
        it('if value is zero', function () {
            function compile() {
                $compile('<datetimepicker data-ng-model="date" data-datetimepicker-config="{ minuteStep: 0 }"></datetimepicker>')($rootScope);
            }
            expect(compile).toThrow("minuteStep must be greater than zero and less than 60");
        });
        it('if value is less than zero', function () {
            function compile() {
                $compile('<datetimepicker data-ng-model="date" data-datetimepicker-config="{ minuteStep: -1 }"></datetimepicker>')($rootScope);
            }
            expect(compile).toThrow("minuteStep must be greater than zero and less than 60");
        });
        it('if value is 60', function () {
            function compile() {
                $compile('<datetimepicker data-ng-model="date" data-datetimepicker-config="{ minuteStep: 60 }"></datetimepicker>')($rootScope);
            }
            expect(compile).toThrow("minuteStep must be greater than zero and less than 60");
        });
        it('if value is greater 60', function () {
            function compile() {
                $compile('<datetimepicker data-ng-model="date" data-datetimepicker-config="{ minuteStep: 61 }"></datetimepicker>')($rootScope);
            }
            expect(compile).toThrow("minuteStep must be greater than zero and less than 60");
        });
        it('if value is not numeric', function () {
            function compile() {
                $compile('<datetimepicker data-ng-model="date" data-datetimepicker-config="{ minuteStep: \'5\' }"></datetimepicker>')($rootScope);
            }
            expect(compile).toThrow("minuteStep must be numeric");
        });
    });
    describe('does NOT throw exception', function () {
        it('if value is between 1 and 59', function () {
            for (var i = 1; i < 60; i++ ) {
                $compile('<datetimepicker data-ng-model="date" data-datetimepicker-config="{ minuteStep: ' + i + ' }"></datetimepicker>')($rootScope);
            }
        });
    });
});
